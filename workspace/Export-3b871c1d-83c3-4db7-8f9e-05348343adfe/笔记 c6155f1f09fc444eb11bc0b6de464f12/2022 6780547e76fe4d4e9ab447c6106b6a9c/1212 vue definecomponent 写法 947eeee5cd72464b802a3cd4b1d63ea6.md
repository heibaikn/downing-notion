# 1212 vue definecomponent 写法

```jsx
export default defineComponent({
  props: {
    name: {
      type: String,
      default: 'view'
    },
    data: {
      type: Object,
      default: {}
    },
    selectItem: {
      type: Object,
      default: {}
    }
  },
  emits: ['onMessage', 'watchValue'],
  expose: ['setValue', 'setLabel'],
  setup(props, { slots,emit }) {
    const instance = getCurrentInstance() as any;
    const setValue = (val: string) => {
      instance.emit('onMessage', {
        type: 'dropdownValue',
        data: val
      })
    }
    const setLabel = (data: any) => {
      instance.emit('onMessage', {
        type: 'dropdownLabel',
        data: data
      })
    }
    watch(() => props.selectItem.value, () => {
      instance.emit('watchValue', props.selectItem.value)
    })
    return {
      setValue,
      setLabel
    }
  },
  render() {
    let children: any = [];
    const props = {
      class: 'slot'
    }
    if (typeof this.$slots[this.name] === "function") {
      children = this.$slots[this.name]({ data: this.data })
    }
    return h('div', props, children)
  }
})
```