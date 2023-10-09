/* eslint-disable react/jsx-key */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Item from "./Item";
import { responsive } from "./data";
import style from "./Carousel.module.css";

const imageUrl = [
  {
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/5ac0/1d97/074ad35642994e869f88e0dac6233016?Expires=1698019200&Signature=aBvdP6VcYAG8vbMKHukLqmeFq6Er8Q2wCiOdJrZJpKiNwQEYe4zRKtVVSlkBEUAAalk6CctWo5uDbx9iKQolJBTs-pAg8ja7yJQaMpxm69abyuFVWsitPYLF~fQpL5yPkd8szc14Ovct6dalvRIZUKmijXMWFdZSDeXzPxJ~s5YZ3MxB3HMPBJzUKkQtaD8TkoeXfnp0Rx8rk~vY7TnFeqb7t-Yw0bU83IDQ-5DTiC1EpCsVdUsEYF4lFPGbKgGq-OLeDGEEWusFFhvscIPVkR8~hQsOw0JsDLPN8QxyPRYrePpQdEAu84tXyLA8pUCEzK4Fe1GiKx4xAQETZ7f3qw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/5ac0/1d97/074ad35642994e869f88e0dac6233016?Expires=1698019200&Signature=aBvdP6VcYAG8vbMKHukLqmeFq6Er8Q2wCiOdJrZJpKiNwQEYe4zRKtVVSlkBEUAAalk6CctWo5uDbx9iKQolJBTs-pAg8ja7yJQaMpxm69abyuFVWsitPYLF~fQpL5yPkd8szc14Ovct6dalvRIZUKmijXMWFdZSDeXzPxJ~s5YZ3MxB3HMPBJzUKkQtaD8TkoeXfnp0Rx8rk~vY7TnFeqb7t-Yw0bU83IDQ-5DTiC1EpCsVdUsEYF4lFPGbKgGq-OLeDGEEWusFFhvscIPVkR8~hQsOw0JsDLPN8QxyPRYrePpQdEAu84tXyLA8pUCEzK4Fe1GiKx4xAQETZ7f3qw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/5ac0/1d97/074ad35642994e869f88e0dac6233016?Expires=1698019200&Signature=aBvdP6VcYAG8vbMKHukLqmeFq6Er8Q2wCiOdJrZJpKiNwQEYe4zRKtVVSlkBEUAAalk6CctWo5uDbx9iKQolJBTs-pAg8ja7yJQaMpxm69abyuFVWsitPYLF~fQpL5yPkd8szc14Ovct6dalvRIZUKmijXMWFdZSDeXzPxJ~s5YZ3MxB3HMPBJzUKkQtaD8TkoeXfnp0Rx8rk~vY7TnFeqb7t-Yw0bU83IDQ-5DTiC1EpCsVdUsEYF4lFPGbKgGq-OLeDGEEWusFFhvscIPVkR8~hQsOw0JsDLPN8QxyPRYrePpQdEAu84tXyLA8pUCEzK4Fe1GiKx4xAQETZ7f3qw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
];

export default function Final() {
  const product = imageUrl.map((item) => (
    <Item name={item.name} url={item.imgUrl} />
  ));
  return (
    <div
      className={style.main_div}
      style={{
        width: window.innerWidth > 480 ? "25%" : "80%",
        backgroundColor: "white",
        height: "auto",
        objectFit: "cover",
        borderRadius: "10px",
        position: "absolute",
        top: window.innerWidth > 480 ? "50%" : "308px",
        right: window.innerWidth > 480 ? "225px" : "43px",
        transform: "translatey(-50%)",
      }}
    >
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}
