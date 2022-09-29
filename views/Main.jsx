const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ user }) {
  return (
    <Layout user={user}>
      <div className="container">
        <div className="carousel">
          {/* {Array.map((el) => (
            <div className="carousel__face">
              <span>{el.title}</span>
            </div>
          ))} */}
          <div className="carousel__face">
            <span>
              {' '}
              <img src="https://assets-global.website-files.com/5e5d43546b94f97f39c228fa/5f3fc4bf3960a278a2abb05c_alex-clockwork-orange.png" />
            </span>
          </div>
          <div className="carousel__face">
            <span>
              {' '}
              <img src="https://www.annarusska.ru/upload/resize_cache/content/752/1100_800_1619711fa078991f0a23d032687646b21/chasi_s_dragotsennimi_kamnyami.jpg" />
            </span>
          </div>
          <div className="carousel__face">
            <span>
              <img src="https://studio-time.ru/upload_img/mexanicheskie_chasy_45.jpg" />
            </span>
          </div>
          <div className="carousel__face">
            <span><img src="https://cs1.livemaster.ru/storage/2a/de/6755a66e796797baf3b5bfad33k6--ukrasheniya-muzhskie-chasy-na-zakaz.jpg" /></span>
          </div>
          <div className="carousel__face">
            <span><img src="https://www.swisschrono.ru/wa-data/public/site/blog/sihh-2019.jpg" /></span>
          </div>
          <div className="carousel__face">
            <span><img src="https://i.pinimg.com/736x/0a/89/0c/0a890c4383503c035a63217ba55460cb--fine-watches-mens-watches.jpg" /></span>
          </div>
          <div className="carousel__face">
            <span><img src="http://images.lacotedesmontres.com/mesIMG/imgHD/46221.jpg" /></span>
          </div>
          <div className="carousel__face">
            <span><img src="https://img.alicdn.com/imgextra/i2/6000000006168/TB2KwudnaSWBuNjSsrbXXa0mVXa_!!6000000006168-0-tbvideo.jpg" /></span>
          </div>
          <div className="carousel__face">
            <span><img src="https://www.alltime.ru/obj/catalog/watch/corum/img/big/113-161-15-0001-0000R__2.jpg" /></span>
          </div>
        </div>
      </div>
    </Layout>
  );
};
