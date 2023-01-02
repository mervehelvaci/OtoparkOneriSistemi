import React from "react";
import Image from "react-bootstrap/Image";
import "./style.css";

function HomeContect() {
  return (
    <div className="container">
      <div className="itemCenter">
        <Image src="/images/people.jpg" alt="Not Found image" />
      </div>
      <h2 className="itemCenter">Ana Sayfa</h2>
      <p>
        Bu websitesinin amacı kayıtlı kullanıcıların bilgilerini listelemektir.
        Website Layout yapısına göre sayfa bölümlere ayrılmıştır. Arka planda
        çalışan kodun dinamik bir yapıda olması için çalışılmıştır. Kullanıcılar
        kayıt olur.
      </p>
    </div>
  );
}

export default HomeContect;
