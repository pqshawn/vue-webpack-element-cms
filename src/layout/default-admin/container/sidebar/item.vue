<script>
export default {
  name: "MenuItem",
  functional: true,
  props: {
    icon: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  },
  render(h, context) {
    const { icon, title } = context.props;
    return h(
      "div",
      { style: {}, attrs: {} },
      [
        h("i",
         {attrs: {"class": icon} }),
        h("span", 
        { style: {}, attrs: {"slot": title} }, title)
      ]
    );
    // return h("span", { style: {}, attrs: {"slot": title} }, title);
  }
};
</script>