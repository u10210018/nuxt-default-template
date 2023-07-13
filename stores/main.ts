export const useMainStore = defineStore('main', {
  state: () => {
    return {
      title: 'Hello there',
    }
  },
  persist: {
    storage: persistedState.localStorage,
  },
})
