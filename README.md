# linkchain

linkchain is global one-time storage for cross domain.

Easy, Simple, LightWeight, and Fast.

You can use cross domain storage without any browser's storage (cookie, localStorage, etc...).

## Caution
This is experimental project.
Any problems are not my responsibility.

## Setup

### Browser

```html
<script
  async
  src="https://araj-dev.github.io/link-chainer/dist/link-chainer.min.js"
></script>
```

### From NPM

```bash
npm install link-chainer
```

## Usage

### Browser

Use sdk script via cdn (in both domains)

````html
```html
<script
  async
  src="https://araj-dev.github.io/link-chainer/dist/link-chainer.min.js"
></script>
````

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

## Contribution

Create issue or PR

## Licence

Apache-2.0

## Author

[araj-dev](https://github.com/araj-dev)

## References
