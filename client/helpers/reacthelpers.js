import React from 'react';

export function puke(obj) {
    return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}