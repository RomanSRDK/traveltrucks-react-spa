function CamperView({ camper }) {
  console.log(camper);

  return (
    <>
      {camper.gallery.map((image, index) => (
        <img key={index} src={image.thumb} alt={`${camper.name}`} />
      ))}
      <div></div>
    </>
  );
}

export default CamperView;
