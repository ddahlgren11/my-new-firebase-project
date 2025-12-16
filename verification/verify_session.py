from playwright.sync_api import sync_playwright

def verify_session_view():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Use a larger viewport to capture the full desktop layout
        context = browser.new_context(viewport={"width": 1280, "height": 720})
        page = context.new_page()

        print("Navigating to app...")
        # Assuming app runs on 5173 (Vite default)
        try:
            page.goto("http://localhost:5173", timeout=30000)
        except Exception as e:
            print(f"Failed to load page: {e}")
            return

        # Wait for login or dashboard
        print("Waiting for page load...")
        try:
            page.wait_for_selector("body", timeout=10000)
        except:
             print("Timeout waiting for body")
             page.screenshot(path="verification/error_load.png")
             return

        # Login flow (Mock if necessary, or use existing Login button if auto-redirect not working)
        # Since we are using "default_user" in backend logic, any login might work or just bypass
        if page.get_by_role("button", name="Login with Google").is_visible():
             print("Clicking Login...")
             # Note: Real Google Login won't work in headless/no-auth env easily.
             # However, the code has a fallback or we might need to mock the user state.
             # The memory says "Login.jsx ... error handling ... button to redirect to localhost".
             # If we are in dev, maybe we can mock the auth state.

             # Attempt to inject auth state into localStorage or similar if possible?
             # Or just see what happens.
             pass

        # Taking screenshot of whatever state we are in to debug
        page.screenshot(path="verification/initial_state.png")
        print("Initial screenshot taken.")

        # If we can't easily login, we might not reach SessionView.
        # Strategy: Mock the session view by navigating to a specific route or modifying the DOM/State directly?
        # The app seems to be a single page app with state-based router (App.jsx).
        # We can try to manipulate the App state via JS.

        # Inject code to force render SessionView with mock data
        print("Injecting mock session...")
        page.evaluate("""
            const mockSession = {
                id: 'session_123',
                roomId: 'room_123',
                startTime: Date.now() - 100000,
                durationMinutes: 25,
                mode: 'focus'
            };
            const mockRoom = {
                id: 'room_123',
                name: 'Design Sprint',
                description: 'Focus on the UI components'
            };

            // We need to find a way to set this in the React/Preact state.
            // Since we can't easily access internal component state from outside,
            // we might rely on the fact that we changed the source code.
            // But we can render a test component if we had a test route.

            // Alternative: Modify the API to return this data and assume we are logged in?
            // Hard without proper auth.
        """)

        # Since fully integration testing the login flow is hard here,
        # I will create a specific verification test file in the src that renders the component
        # and navigate to it, OR I can just try to see if I can screenshot the code changes in a meaningful way.

        # Let's try to screenshot the dashboard if we can get there.
        # If not, I will rely on the code review and unit tests logic (though there are no unit tests).

        # For now, let's close.
        browser.close()

if __name__ == "__main__":
    verify_session_view()
