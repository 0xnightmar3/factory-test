export class Registry<K, V> {
    private readonly registry = new Map<K, V>();

    register(type: K, value: V): void {
        const registered = this.registry.get(type);
        if (registered) throw new Error(`Already registered: ${type}`);
        this.registry.set(type, value);
    };

    get(type: K): V {
        const registered = this.registry.get(type);
        if (!registered) throw new Error(`No registry for ${type}`);
        return registered;
    };
};
