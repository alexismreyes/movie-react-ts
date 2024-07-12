import { FaRegPlayCircle, FaStar } from "react-icons/fa";
import { ContainerInfo, MiniAvatar, ButtonBuy } from "../sytled.components";
import BlackWidow from "../../assets/black-widow.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Info = () => {

    const navigateTo = useNavigate();

    const { state } = useContext(Context);

    const goToDetails = (): void =>{
        navigateTo("/details/2");
    }

  return (
    <>
      <ContainerInfo height={50}>
        <section className="icon-info">
          <FaRegPlayCircle size={25} color={"red"} />
        </section>
        <section className="title-info">
          { state.name }
        </section>
        <section className="details-info">
          <section className="list">
            <div>2020</div>
            <div>Fantastic</div>
            <div>2h 35 min</div>
          </section>
        </section>
        <section className="star">
          <FaStar color="orange" />
          <FaStar color="orange" />
          <FaStar color="orange" />
          <FaStar color="orange" />
          <FaStar color="orange" />
        </section>

        <section className="description">
          <div className="description-title">Plot Summary</div>
          <div className="desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque rem
            nobis quae minus! Fuga, esse velit vero illum fugit cupiditate
            placeat error possimus facere odio harum incidunt illo veritatis
            quod.
          </div>
        </section>

        <section className="description">
          <div className="description-title">Cast</div>
          <div className="images">
            {[1, 2, 3, 4].map(item => <MiniAvatar key={item} src={BlackWidow} /> )}
          </div>
        </section>

        <section className="button-buy">
            <ButtonBuy onClick={goToDetails}>BUY</ButtonBuy>
        </section>

      </ContainerInfo>
    </>
  );
};
export default Info;
