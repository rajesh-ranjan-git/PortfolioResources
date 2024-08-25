import "./Cards.scss";

export default function BlogCard(props) {
  return (
    <div className="blog-slider">
      <div className="blog-slider__wrp swiper-wrapper">
        <div className="blog-slider__item swiper-slide">
          <div className="blog-slider__img">
            <img
              src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp"
              alt=""
            />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code">26 December 2019</span>
            <div className="blog-slider__title">Lorem Ipsum Dolor</div>
            <div className="blog-slider__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae voluptate repellendus magni illo ea animi?{" "}
            </div>
            {/* <a href="#" className="blog-slider__button">READ MORE</a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export const EduCard = (props) => {
  return (
    <div className="edu_slider">
      <div className="edu_slider_wrp edu_swiper_wrapper">
        <div className="edu_slider_item edu_slide">
          <div className="edu_slider_img">
            <img src={props.img_path} alt="" />
          </div>
          <div className="edu_slider_content">
            <div className="edu_slider_title">{props.title}</div>
            <p className="edu_slider_period">{props.period}</p>
            <span className="edu_slider_code">{props.college}</span>
            <div className="edu_slider_text">{props.gpa}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ExpCard = (props) => {
  const data = Object.values(props.data);
  return (
    <div className="experience_card">
      <div className="cards">
        <div className="card">
          <div className="card_header" id="card_header">
            <img
              src={props.img_path}
              className="card_image"
              alt={`${props.company} image`}
            />
            <div className="card_info">
              <span className="card_title">
                {props.role}{" "}
                <span className="card_subtitle">{props.company}</span>{" "}
              </span>
              <span className="card_date">{props.period}</span>
            </div>
          </div>
          <div className="card_body" id="card_body">
            <div className="card_quote">
              {/* <p className="card_paragraph" id='paragraph'>
                        A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea.
                        </p> */}

              <ul>
                {data.map((n, key) => (
                  <li key={key}>{n}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PortfolioCard = (props) => {
  return (
    <div className="portfolio_card">
      <header
        style={{ backgroundImage: `url(${props.image})` }}
        className="portfolio_card_header"
        onClick={() => props.onClick(props.index)}
      ></header>
      <section className="portfolio_card_section">
        {/* <a href={props.link}>
          <div className="portfolio_card_title">
            <h1>
              <a href={props.link}> {props.title}</a>
            </h1>
            <a href={props.link}>View more</a>
          </div>
        </a> */}
        <div className="portfolio_card_title">
          <h1>
            <a href={props.link}> {props.title}</a>
          </h1>
          <a href={props.link}>View more</a>
        </div>
        <h3>{props.subtitle}</h3>
        <p>{props.text}</p>
        <small>{props.by}</small>
      </section>
    </div>
  );
};

export const CertificateCard = (props) => {
  return (
    <div className="certificate_card" data-aos="fade-up" data-aos-delay="2400">
      <p className="certificate_heading_img">
        <img src={props.image} alt={props.title} />
      </p>

      <h1>{props.title}</h1>
      <h2>{props.college}</h2>
      <h3>{props.provider}</h3>
      {/* <p className='certificate_desc'>{props.desc}</p> */}
    </div>
  );
};
