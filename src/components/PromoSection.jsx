import ProductTile from './ProductTile';

export default function PromoSection() {
  const products = [
    {
      title: 'Shop iPhone',
      image:
        'https://www.apple.com/v/home/be/images/promos/iphone-15/promo_iphone15_announce__fmxxi8r9fkuy_large.jpg',
    },
    {
      title: 'Shop Mac',
      image:
        '/mac-book.png',
    },
    {
      title: 'Shop iPad',
      image:
        'https://www.apple.com/v/home/be/images/promos/ipad-pro/promo_ipadpro__ch217v9v7no2_large.jpg',
    },
    {
      title: 'Shop Watch',
      image:
        'https://www.apple.com/v/home/be/images/promos/apple-watch-series-9/promo_apple_watch_series_9_order__b3u85rm9zf6u_large.jpg',
    },
    {
      title: 'Shop AirPods',
      image:
        'https://www.apple.com/v/home/be/images/promos/airpods-pro/promo_airpods_pro_order__d8xv36p4uwae_large.jpg',
    },
  ];

  return (
    <section className="promo-section">
      {products.map((product, index) => (
        <ProductTile
          key={index}
          title={product.title}
          imageUrl={product.image}
        />
      ))}
    </section>
  );
}
