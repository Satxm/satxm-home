---
title: "Markdown 样式引导"
description: "以下是在Astro中编写Markdown内容时可以使用的一些基本Markdown语法示例。"
pubDate: "2024/8/2 9:00"
image: "/home.jpg"
categories:
  - 技术
tags:
  - Makrdown
badge: Guide
---

以下是在Astro中编写Markdown内容时可以使用的一些基本Markdown语法示例。

## 标题

下面的HTML `<h1>`—`<h6>`元素表示六个级别的节标题`<h1>`是最高的节级别，而`<h6>`是最低的节级别。

# H1

## H2

### H3

### H4

#### H5

##### H6

## 段落

这是一个段落。

## 图片

### 语法

```markdown mockup-代码
![提示文字](图像的完整（或相对）路径)
```

### 输出

![astro-icon-dark](https://astro.build/assets/press/astro-icon-dark.png)

## 块引用

`<blockquote>` 元素表示从另一个来源引用的内容，可以选择引用必须在`footer`或`cite`元素内，也可以选择内联，如注释和缩写。

### 无属性块引用

### 语法

```markdown
> 与此同时，我们必须去分享我们的礼物。
> **注意** 您可以在块引用中使用_Markdown语法。
```

### 输出

> 与此同时，我们必须去分享我们的礼物。
> **注意** 您可以在在块引用中使用_Markdown语法。

### 有属性块引用

### 语法

```markdown
> 不要通过分享记忆来交流，要通过交流来分享记忆。<br>
> — <cite>Rob Pike[^1]</cite>
```

### 输出

> 不要通过共享内存进行通信；而是通过通信共享内存。<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: 以上引文摘自Rob Pike在2015年11月18日的Gopherfest 2015上的[演讲](https://www.youtube.com/watch?v=PAAkCSZUG1c)。

## 字体

### 语法

```markdown
*斜体*：用 * 或者 _ 包裹文本进行 斜体 格式化。

**粗体**：用 ** 或者 __ 包裹文本进行 粗体 格式化。

~~删除线~~：用~~包裹文本进行删除线格式化。
```

### 输出

*斜体*：用 * 或者 _ 包裹文本进行 斜体 格式化。

**粗体**：用 ** 或者 __ 包裹文本进行 粗体 格式化。

~~删除线~~：用~~包裹文本进行删除线格式化。

## 表格

### 语法

```markdown
|   斜体   |   加粗   |   删除线   |
| -------- | -------- | ---------- |
|  _斜体_  | **加粗** | ~~删除线~~ |
```

### 输出

|   斜体   |   加粗   |   删除线   |
| -------- | -------- | ---------- |
|  _斜体_  | **加粗** | ~~删除线~~ |

## 代码块

### 语法

Markdown中代码格式化可以通过三种方式：
- 行内式：通过一对 ` 包裹单行代码实现；
- 代码块：通过一对 ``` 包裹实现，可以指定代码的编程语言，如Python、JavaScript、Rust、html、css、markdown、typescript、txt、bash等，且支持语法高亮；
- 缩进式：通过缩进 >= 4空格实现，部分支持语法高亮。


````markdown
```cpp
#include <bits/stdc++.h>
using namespace std;
const int N = 1e5 + 5;
int n, k, a[N];
long long ans;
vector<int> v[N];
int main()
{
    scanf("%d%d", &n, &k);
    for (int i = 1; i <= n; i++)
    {
        scanf("%d", &a[i]);
        v[i % k].push_back(a[i]);
    }
    for (int i = 0; i < k; i++)
        sort(v[i].rbegin(), v[i].rend());
    for (int i = 0; i < k; i++)
    {
        for (int j = 0; j + 1 < v[i].size(); j += 2)
        {
            ans += v[i][j] + v[i][j + 1];
        }
    }
    printf("%lld\n", ans);
    return 0;
}
```
````

### 输出

```cpp
#include <bits/stdc++.h>
using namespace std;
const int N = 1e5 + 5;
int n, k, a[N];
long long ans;
vector<int> v[N];
int main()
{
    scanf("%d%d", &n, &k);
    for (int i = 1; i <= n; i++)
    {
        scanf("%d", &a[i]);
        v[i % k].push_back(a[i]);
    }
    for (int i = 0; i < k; i++)
        sort(v[i].rbegin(), v[i].rend());
    for (int i = 0; i < k; i++)
    {
        for (int j = 0; j + 1 < v[i].size(); j += 2)
        {
            ans += v[i][j] + v[i][j + 1];
        }
    }
    printf("%lld\n", ans);
    return 0;
}
```

## 列表

### 有序列表

### 语法

```markdown
1. First item
2. Second item
3. Third item
```

### 输出

1. First item
2. Second item
3. Third item

### 无序列表

### 语法

```markdown
- List item
- Another item
- And another item
```

### 输出

- List item
- Another item
- And another item

### 嵌套列表

### 语法

```markdown
- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese
```

### 输出

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## 其他元素 — abbr（缩写）, sub（下标）, sup（上标）, kbd（键盘）, mark（高亮）

### 语法

```markdown
<abbr title="Graphics Interchange Format">GIF</abbr> 是一种位图图像格式。

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

键入 <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> 以结束会话。

大多数<mark>蝾螈</mark>是夜行性的，捕食昆虫、蠕虫和其他小生物。
```

### 输出

<abbr title="Graphics Interchange Format">GIF</abbr> 是一种位图图像格式。

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

键入 <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> 以结束会话。

大多数<mark>蝾螈</mark>是夜行性的，捕食昆虫、蠕虫和其他小生物。
