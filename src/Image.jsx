export default function Image() {
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img
              src="https://dog.ceo/api/breeds/image/random"
              alt="cute dog!"
            />
          </figure>
        </div>
      </div>
    );
  }