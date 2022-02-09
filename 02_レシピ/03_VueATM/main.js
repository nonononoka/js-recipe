Vue.createApp({
  data() {
    return {
      money: 0,
      zankin: 0,
      trihikis: [],
    }
  },

  methods: {
    nyukin: function () {
      this.zankin = this.zankin + Number(this.money)
      this.trihikis.push({ type: "入金", money: this.money, date: new Date() })
    },
    shukin: function () {
      this.zankin = this.zankin - Number(this.money)
      this.trihikis.push({ type: "出金", money: this.money, date: new Date() })
    },
  },
  computed: {
    activeSubmit: function () {
      if (this.money > this.zankin) {
        return true
      }
    },
  },
}).mount("#main")
