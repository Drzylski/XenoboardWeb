export default {
  data() {
    return {
      test: 'test',
    }
  },
  computed: {
    isLoggedIn () {
        return true;
    }
  },
  methods : {
    formatDateStringCompact (date) {
      return new Date(date).toLocaleDateString("en-US");
    },
}
}