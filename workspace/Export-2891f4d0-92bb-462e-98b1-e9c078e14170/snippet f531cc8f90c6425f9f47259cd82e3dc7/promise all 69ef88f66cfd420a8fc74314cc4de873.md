# promise.all

## 多个请求，并发发起且链式处理返回

替代多个 await 方案，

```jsx
const getProjectDetail =async () =>{
    const res =	await fetchProjectInfo()
	  return ()=>{
			//deal project
		}
}

const getTargetsDetail=async () =>{
    const res =	await fetchTargetInfo()
	  return ()=>{
			//deal target
		}
}

const getBuildDetail=async () =>{
    const res =	await fetchBuildInfo()
	  return ()=>{
			//deal build
		}
}

Promise.all([getProjectDetail(), getTargetsDetail(), getBuildDetail()])
	.then(([projectCallback, targetCallback, buildCallback]) => {
	 projectCallback && projectCallback();
    targetCallback && targetCallback();
    buildCallback && buildCallback();

  })
```

## fetch 实现5s timeout