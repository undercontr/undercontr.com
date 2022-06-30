function penv(): NodeJS.ProcessEnv {
    return new Proxy(process.env, {
        get: (target: NodeJS.ProcessEnv, prop: string) => {
            return target[`NEXT_PUBLIC_${prop}`]
        }
    })
}

export default penv();