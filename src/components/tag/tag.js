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
    let _class = ['i-tag-base'];
    let _content;

    // #cccccc to rgba
    function HexToRgb (color, level) {
      let reg = /^#([A-Fa-f0-9]{6})$/;
      if (!reg.test(color)) {
        throw new Error("color must be hexadecimal");
      }
      if (level>1) {
        level = 1
      } else if (level<=0) {
        level = 0.1
      }
      let color_hxs = color.replace('#','').match(/../g);
      let color_rgb = [];
      for (let i=0; i<color_hxs.length; i++) {
        color_rgb[i] = parseInt(color_hxs[i],16);
      }
      return `rgba(${color_rgb[0]},${color_rgb[1]},${color_rgb[2]},${level})`;
    }

    // theme
    if (self.theme === "full") {
      _style['background'] = self.color
    } else if (self.theme === "plain") {
      _style['color'] = self.color;
      _style['border'] = `1px solid ${self.color}`;
      _style['background'] = HexToRgb(self.color, 0.1);
    } else if (self.theme === "light") {
      _style['color'] = self.color,
      _style['border'] = `1px solid ${self.color}`
    }

    // size
    if (self.size === "mini") {
      _class.push('i-tag-size-mini');
    } else if (self.size === "small") {
      _class.push('i-tag-size-small');
    } else if (self.size === "medium") {
      _class.push('i-tag-size-medium');
    } else if (self.size === "bigger") {
      _class.push('i-tag-size-bigger');
    }

    // closable
    if (self.closable) {  
      _content = [
        self.$slots.default,
        createElement(
          'i-icon',
          {
            style: {
              fontSize: self.size
            },
            class: ['i-icon-base'],
            attrs: {
              name: 'close2'
            },
            nativeOn: {
              click: function () {
                self.$emit('close', self.$slots.default[0].text)
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
        class: _class,
        style: _style
      },
      _content
    )
  }

}