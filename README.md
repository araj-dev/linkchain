# linkchain

linkchain is global one-time storage for cross domain.

Easy, Simple, LightWeight(~1kB), and Fast.

You can use cross domain storage without any browser's storage (cookie, localStorage, etc...).

## Demo
https://lc.araj.jp

## Caution

This is experimental project and beta version.

Do not commercial use.

Any problems are not my responsibility.

Server limit is too small.

## Data flow
![fig](https://github.com/araj-dev/linkchain/assets/19401710/100e29ef-7cbd-4544-a90a-53393a909c62)


## Setup

### Browser

```html
<script async src="https://lc.araj.jp/lc.min.js"></script>
```

### From NPM (In progress)

## Usage

### Browser

Use sdk script via cdn (in both domains)

```html
<script async src="https://lc.araj.jp/lc.min.js"></script>
```

Set in https://my-host.com

```html
<script>
  linkchain = window.linkchain || {}
  linkchain.ready = function (lc) {
    lc.set({
      myName: "araj-dev",
    })
  }
</script>
```

Get in https://external-host.com

```html
<script>
  linkchain = window.linkchain || {}
  linkchain.ready = function (lc) {
    console.log(lc.data)
    // {myName: "araj-dev"}
  }
</script>
```

## Hosting

linkchain server is hosted by araj-dev's vercel server.
please contact [araj-dev](ja.fileonly@gmail.com) if you want to host your own server.

## Contribution

Create issue or PR

## Licence

MIT License

## Author

[araj-dev](https://github.com/araj-dev)

## References

In progress

# LoadMap

- [] Use jwt / E2EE for security
- [] Enterprise plan
- [] Namespaced data
- [] More option for security
- [] Self-hosting option
