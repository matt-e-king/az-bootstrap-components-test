// globally registers components
export const registerComponents = (Vue, components) => {
  if (!Vue || !components) throw new Error('[registerComponents] missing params')

  Object.keys(components).forEach((key) => {
    const c = components[key]
    const {
      name,
      extendOptions: {
        name: exName
      } = {}
    } = c

    Vue.component(exName || name, c)
  })
}