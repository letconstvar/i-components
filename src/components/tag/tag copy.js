export default {
  props: {
    theme: {
      type: String,
      default: "full"
    },
    size: {
      type: String,
      default: "medium"
    },
    color: {
      type: String,
      default: "#50b34c"
    },
    closable: {
      type: Boolean,
      default: false
    },
  },

  render: function (createElement) {
    let self = this;
    let _style = {};
    let _content;

    // theme
    if (self.theme === "full") {
      _style['background'] = self.color
    } else if (self.theme === "plain") {
      // _style['color'] = self.color,
      // _style['border'] = `1px solid ${self.color}`

    } else if (self.theme === "light") {
      style['color'] = self.color,
      _style['border'] = `1px solid ${self.color}`
    }

    // size
    if (self.size === "mini") {
      _style['padding'] = '3px 5px';
      _style['fontSize'] = '12px';
    } else if (self.size === "small") {
      _style['padding'] = '3px 8px';
      _style['fontSize'] = '12px';
    } else if (self.size === "medium") {
      _style['padding'] = '3px 10px';
      _style['fontSize'] = '12px';
    } else if (self.size === "bigger") {
      _style['lineHeight'] = '30px';
      _style['padding'] = '0px 12px';
      _style['fontSize'] = '12px';
    }

    // closable
    if (self.closable) {  
      _content = [
        self.$slots.default,
        createElement(
          'i-icon',
          {
            style: {
              marginLeft: '5px',
              cursor: 'pointer',
              fontSize: self.size
            },
            attrs: {
              name: 'close2'
            },
            nativeOn: {
              click: function (event) {
                self.$emit('close', event)
              }
            },
          },
        )
      ]
    } else {
      _content = self.$slots.default;
    }

    return createElement(
      'span' ,
      {
        class: ['base-tag'],
        style: _style
      },
      _content
    )
  }

}