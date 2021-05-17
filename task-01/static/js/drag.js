import draggable from '../../node_modules/vuedraggable/'
export default {
  name: 'DndList',
  components: { draggable },
  watch: {
  },
  data () {
    return {
      falgs: 'article',
      disabled: false,
      list1: [],
      list2: [{id: 1, name: 1}, {id: 2, name: 2}, {id: 3, name: 3}, 　　　　　　　　　{id: 4, name: 4}, {id: 5, name: 5}, {id: 6, name: 6}, 　　　　　　　　　　{id: 7, name: 7}, {id: 8, name: 8}, {id: 9, name: 9}, {id: 10, name: 10}　　　　　　　　]
    }
  },
  computed: {
  },
  methods: {
    end (ev) {
      if (ev.to.className === 'dragArea11') {
        this.$set(this.list2[ev.oldIndex], 'flag', true)
      }
    },
    start22 (event) {
      this.falgs = '222222'
    },
    end22 (ev) {
      this.falgs = 'article'
    },
    handleDel (index, id) {
      this.list1.splice(index, 1)
      let q = this.list2.find((value, index, arr) => {
        return value.id === id
      })
      this.$set(q, 'flag', false)
    }
  }
}