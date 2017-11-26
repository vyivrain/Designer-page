import React from 'react'
import Slider from 'react-slick'

export default class SlickCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { project: props.project }
  }

  getImageURL(project) {
    return project['medium_project_image_url']
  }

  slickSettings() {
    return {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true
    }
  }

  render() {
    let self = this;
    console.log(this.state);
    var project_images = this.state.project.project_images.map(obj => {
      return (
        <div key={`project-image-${obj.id}`}>
          <img src={obj['image_url']} />
        </div>
      )
    });

    if(project_images.length > 0) {
      return(
        <div className="custom-container">
          <Slider {...this.slickSettings()}>
            {project_images}
          </Slider>
        </div>
      )
    }
  }
}
