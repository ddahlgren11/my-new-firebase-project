from playwright.sync_api import sync_playwright
import time

def verify_session_view():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1280, "height": 720})
        page = context.new_page()

        print("Navigating to app...")
        try:
            page.goto("http://localhost:5173", timeout=30000)
        except Exception as e:
            print(f"Failed to load page: {e}")
            return

        print("Waiting for page load...")
        try:
            page.wait_for_selector("text=Join Test", timeout=10000)
        except:
             print("Timeout waiting for Join Test header")
             page.screenshot(path="verification/error_load.png")
             return

        page.screenshot(path="verification/before_join.png")
        print("Initial screenshot taken.")

        # Click Join
        try:
            join_btn = page.get_by_role("button", name="Join Active Session")
            if join_btn.is_visible():
                print("Clicking Join Active Session...")
                join_btn.click()

                # Wait for transition
                time.sleep(2)

                page.screenshot(path="verification/after_join.png")
                print("After join screenshot taken.")
            else:
                print("Join button not visible!")
        except Exception as e:
            print(f"Error clicking join: {e}")

        browser.close()

if __name__ == "__main__":
    verify_session_view()
