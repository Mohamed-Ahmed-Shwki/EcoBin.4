# EcoBin Platform

A smart eco-tourism and recycling platform with three connected portals, built with plain HTML, CSS and JavaScript (no build step, no dependencies). The interface is available in English and Arabic (RTL).

## Structure

```
ecobin-platform/
├── index.html            Landing page linking to the three portals
├── ecobin-user/          Tourist portal: home, store, cart & my orders
├── ecobin-supplier/      Supplier portal: products, stock, incoming orders
└── ecobin-admin/         Admin portal: dashboard, bins, suppliers, store management
```

Each portal has its own `assets/shared.css` and `assets/shared.js` (identical copies), so any portal can also be deployed on its own.

## How the portals connect

All three read and write one shared data store in the browser's `localStorage` (products, cart, orders, Green Points). This works because the portals are served from the same origin.

1. **Tourist** adds recycled products to the cart and places an order. Stock drops and one order is created per supplier.
2. **Supplier** sees the order and moves it through Pending → Processing → Shipped → Completed, or declines it (stock is restored). The tourist sees the status update.
3. **Supplier** can add new products. They start as *In review* and only appear in the store after the **Admin** approves them. The admin can also block or unblock any product.

The navbar on every page has a Tourist / Supplier / Admin switcher.

## Run locally

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000/>. Serving over HTTP matters: opening the HTML files directly (`file://`) may not share data between portals.

## Deploy with GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. After a minute the site is live at `https://<your-username>.github.io/<repo-name>/`.

If you host the portals at different addresses, edit the `LINKS` constant at the top of each `assets/shared.js`.

## Limitations

- Prototype only: there is no login, backend or payment. Data lives in each visitor's own browser, so orders are not shared between different people or devices.
- The supplier page uses a "Signed in as" dropdown to simulate supplier accounts.
- Smart-bin readings and dashboard figures are demo data.
