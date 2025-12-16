import { useState, useEffect } from 'preact/hooks';
import { api } from '../api';

export function ProfilePage({ user }) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProfile() {
      if (user) {
        const data = await api.getUserProfile();
        setProfile(data);
      }
      setLoading(false);
    }
    fetchProfile();
  }, [user]);

  if (loading) {
    return (
      <div class="flex items-center justify-center h-full text-gray-400">
        Loading profile...
      </div>
    );
  }

  // Fallback if profile fetch fails but auth user exists
  const displayName = profile?.displayName || user?.displayName || "User";
  const email = profile?.email || user?.email || "No email provided";
  const friendCode = profile?.friendCode || "Unavailable";
  const photoURL = profile?.avatarUrl || user?.photoURL || "https://via.placeholder.com/150";

  return (
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-2xl mx-auto bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700">
        <div class="bg-gray-900 px-6 py-4 border-b border-gray-700">
          <h2 class="text-2xl font-bold text-white">My Profile</h2>
        </div>

        <div class="p-6">
          <div class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <div class="flex-shrink-0">
              <img
                src={photoURL}
                alt="Profile"
                class="h-24 w-24 rounded-full border-2 border-indigo-500 shadow-sm object-cover"
              />
            </div>

            <div class="flex-grow text-center md:text-left">
              <h3 class="text-xl font-semibold text-white">{displayName}</h3>
              <p class="text-gray-400 text-sm mt-1">{email}</p>

              <div class="mt-4 flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-4">
                <div class="bg-indigo-900/50 px-4 py-2 rounded-lg border border-indigo-500/30">
                  <span class="block text-xs text-indigo-300 uppercase font-bold tracking-wider">Friend Code</span>
                  <span class="block text-lg font-mono text-white tracking-widest">{friendCode}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-8 border-t border-gray-700 pt-6">
            <h4 class="text-lg font-medium text-gray-200 mb-4">Account Stats</h4>
            <div class="grid grid-cols-2 gap-4">
               <div class="bg-gray-700/50 p-4 rounded-lg">
                 <span class="block text-gray-400 text-sm">Member Since</span>
                 <span class="block text-white font-medium">
                    {profile?.createdAt ? new Date(profile.createdAt).toLocaleDateString() : 'Unknown'}
                 </span>
               </div>
               {/* Placeholder for future stats */}
               <div class="bg-gray-700/50 p-4 rounded-lg">
                 <span class="block text-gray-400 text-sm">Status</span>
                 <span class="block text-green-400 font-medium">Active</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
