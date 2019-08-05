const depthFirstSearch = (rootNode, vertices, edges) => {
    const stack = []
    const visited = [rootNode]
    stack.push(rootNode)
    while (stack.length) {
        debugger
        const vertex = stack.pop()
        if (!vertex.discovered) {
            vertex.discovered = true
            edges.forEach(edge => {
                if (edge.find(name => name === vertex.name)) {
                    const adjacentNode = vertices.find(v => v.name === edge.find(name => name !== vertex.name))
                    stack.push(adjacentNode)
                    if (!adjacentNode.discovered) {
                        visited.push(adjacentNode)
                    }
                }
            })
        }
    }
    return visited
}