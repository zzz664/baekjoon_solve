def dfs(node):
    for nextNode in adj[node]:
        if not visited[nextNode]:
            visited[nextNode] = True
            sub_tree[node] += dfs(nextNode)
        else:
            continue
    return sub_tree[node]

def nC2(n):
    return int(n * (n - 1) / 2)

n = int(input())

adj = [[] for _ in range(n + 1)]
sub_tree = [1 for _ in range(n + 1)]
visited = [False for _ in range(n + 1)]

for i in range(n - 1):
    v1, v2 = map(int, input().split())
    adj[v1].append(v2)
    adj[v2].append(v1)

visited[1] = True
dfs(1)
result = 0
for i in range(2, n + 1):
    result += nC2(n) - nC2(n - sub_tree[i])
print(result)
