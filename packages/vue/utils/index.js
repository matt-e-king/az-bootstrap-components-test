// globally registers components
export const registerComponents = (Vue, components) => {
  if (!Vue || !components) throw new Error('[registerComponents] missing params')

  Object.keys(components).forEach((key) => {
    const c = components[key]

    // if component package has its own Vue.use installation process, use that
    if (c.install) {
      Vue.use(c)
    } else {
      const {
        name,
        extendOptions: {
          name: exName
        } = {}
      } = c
  
      Vue.component(exName || name, c)
    }
  })
}