# 1101 typescript 类型

## Partial

一个内置泛型类型，用于将对象类型`T`  的所有属性变为可选属性`Partial<T>` 

```tsx
export interface IOptions {
    cwd: string;
    include: string | string[];
    exclude: string | string[];
    check: boolean;
    verbosity: number;
    clean: boolean;
    cacheRoot: string;
    abortOnError: boolean;
    rollupCommonJSResolveHack: boolean;
    tsconfig?: string;
    tsconfigDefaults: any;
    sourceMapCallback: (id: string, map: string) => void;

}

type RPT2Options = Partial<IOptions>;
export { RPT2Options };
```

## 接口类型合并

目的：实现 公共参数和 body 参数的 分离

### 方式1

缺点明显： 长了

```tsx
export interface IPayload<T> {
  body: T
}

export const apiPutCrontab = <B extends IPayload<Crontab>, T extends PayloadProject>
  (params: B & T) => {
   return request.put<any, IResponse<Crontab>>(
    `/ci/projects/${params.project_id}/crontab`,
    params.body
  )
}
```

### 方式二

type 声明方式也可以使用 泛型

```tsx

export type IPayload<T, S = {}> = { body: T } & S;

export const apiPutCrontab =
  (params: IPayload<Crontab, PayloadProject>) => {
    return request.put<any, any>(
      `/ci/projects/${params.project_id}/crontab`,
      params.body
    )
  }
```