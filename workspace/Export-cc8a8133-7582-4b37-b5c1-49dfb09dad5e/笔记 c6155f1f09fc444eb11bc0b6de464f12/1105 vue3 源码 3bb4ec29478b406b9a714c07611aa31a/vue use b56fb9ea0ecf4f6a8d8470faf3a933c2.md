# vue.use

**`Vue.use`** 的工作原理。

1. `installedPlugins` 是一个 **`WeakSet`**，用于跟踪已注册的插件，以避免重复注册。
2. **`VueUse`** 函数接受插件和选项参数。它首先检查插件是否已经注册，如果已经注册，就返回当前应用程序实例。
3. 如果插件具有 **`install`** 方法，它会调用该方法，并将当前应用程序实例作为第一个参数传递给插件的 **`install`** 方法。这是插件注册的标准方式。
4. 如果插件本身是一个函数，它也会被调用，并将当前应用程序实例作为第一个参数传递给插件函数。
5. 最后，已注册的插件会被添加到 **`registeredPlugins`** 集合中

```jsx
export function createAppAPI<HostElement>(
  render: RootRenderFunction<HostElement>,
  hydrate?: RootHydrateFunction
): CreateAppFunction<HostElement> {
  return function createApp(rootComponent, rootProps = null) {
	  // ...
    const context = createAppContext()
    const installedPlugins = new WeakSet()
    let isMounted = false
    const app: App = (context.app = {
      use(plugin: Plugin, ...options: any[]) {
        if (installedPlugins.has(plugin)) {
          __DEV__ && warn(`Plugin has already been applied to target app.`)
        } else if (plugin && isFunction(plugin.install)) {
          installedPlugins.add(plugin)
          plugin.install(app, ...options)
        } else if (isFunction(plugin)) {
          installedPlugins.add(plugin)
          plugin(app, ...options)
        } else if (__DEV__) {
       
        }
        return app
      },
      mixin(mixin: ComponentOptions) 
        return app
      },
      component(name: string, component?: Component): any {   
        return app
      },
      directive(name: string, directive?: Directive) {
        return app
      },
      mount(
        rootContainer: HostElement,
        isHydrate?: boolean,
        isSVG?: boolean
      ): any {},
      unmount() {  },
      provide(key, value) {return app},
      runWithContext(fn) {}
    })
    return app
  }
```