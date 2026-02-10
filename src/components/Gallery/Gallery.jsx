import './Gallery.scss';

const Gallery = () => {
  const galleryImages = [
    "/img/gallery1.jpg",
    "/img/gallery2.png",
    "/img/gallery3.png",
    "/img/gallery4.jpg",
    "/img/gallery5.jpg",
    "/img/gallery6.png"
  ];
  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery__grid">
          {galleryImages.map((src, index)=> (
            <img key={index} src={src} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;