export const dummyAuth = {
  currentUser: null,
  signIn: async (email, password) => ({ email, provider: "password" }),
  signInWithGoogle: async () => ({ email: "google.user@example.com", provider: "google" }),
  signOut: async () => true
};

export const dummyFirestore = {
  get: async () => [],
  add: async (item) => item,
  update: async (item) => item,
  remove: async () => true
};

export const dummyStorage = {
  upload: async () => ({ url: "https://placehold.co/600x400" })
};
