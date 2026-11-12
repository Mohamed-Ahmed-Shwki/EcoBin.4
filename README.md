# EcoBin Platform

Smart waste management and a recycled-products store: three connected portals in plain HTML/CSS/JS (English + Arabic).

| Page | Portal |
|---|---|
| `index.html` | Landing page |
| `user.html`, `store.html`, `cart.html` | Tourist: home, recycled store, cart and orders |
| `supplier.html` | Supplier: products, stock, incoming orders |
| `admin.html` | Admin: dashboard, bins, suppliers, store management |

All pages share `shared.css` and `shared.js`. Products, cart, orders and points are shared through the browser's localStorage, so the pages must be served from the same address (GitHub Pages does this).

Deploy: Settings -> Pages -> Deploy from a branch -> `main` / `(root)`.

Prototype only: no login, backend or payments.
