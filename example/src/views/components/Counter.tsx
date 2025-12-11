'use client';

import { useState } from 'react';

interface CounterProps {
    initialCount?: number;
}

function Counter({ initialCount = 0 }: CounterProps) {
    const [count, setCount] = useState(initialCount);

    return (
        <div>
            <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>+1</button>
            </div>
        </div>
    );
}

export { Counter };
