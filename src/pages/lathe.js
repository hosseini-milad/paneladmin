import React from 'react'
import errortrans from "../translate/error";
import tabletrans from "../translate/tables";
import env from "../env";
import StyleInput from "../components/Button/Input";
import StyleSelect from "../components/Button/AutoComplete";

const lathe = (props) => {
  const direction = props.lang?props.lang.dir:errortrans.defaultDir;
  const lang = props.lang?props.lang.lang:errortrans.defaultLang;

  return (
    <div className="user lathe-page" style={{ direction: direction }}>
      <h4>{tabletrans.lathe[lang]}</h4>
      <div className="list-container">
        
        <div className="lathe-container">
          
          <div className="container">
            <div className="search-container">
              <StyleInput
                title={tabletrans.barcode[lang]}
                direction={lang.dir}
                className="search-input"
              />
              <button className="search-btn">جستجو<i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div className="rx-stock">
              <div className="tab-btn">Stock</div>
              <div className="tab-btn active-tab">Rx</div>
            </div>
            <div className="brand-container">
              <StyleSelect
              title={tabletrans.brand[lang]}
              direction={lang.dir}
              />
              <StyleSelect
              title={tabletrans.material[lang]}
              direction={lang.dir}
              />
            </div>
          </div>
          <div className="image-wrapper">
            <img src="../lathe-sample.jpeg" alt="Lenz" />
          </div>
        </div>
        <div className="lathe-container">
          <div className="input-index-wrapper">
            <p className="title">OD</p>
            <StyleInput
              title="Sphere"
              direction={lang.dir}
            />
            <StyleInput
              title="Cylinder"
              direction={lang.dir}
            />
            <StyleInput
              title="Axis"
              direction={lang.dir}
            />
            <StyleInput
              title="PD"
              direction={lang.dir}
            />
            <StyleInput
              title="Addition"
              direction={lang.dir}
            />
          </div>
          <div className="input-index-wrapper">
          <p className="title">OS</p>
            <StyleInput
              title="Sphere"
              direction={lang.dir}
            />
            <StyleInput
              title="Cylinder"
              direction={lang.dir}
            />
            <StyleInput
              title="Axis"
              direction={lang.dir}
            />
            <StyleInput
              title="PD"
              direction={lang.dir}
            />
            <StyleInput
              title="Addition"
              direction={lang.dir}
            />
          </div>
        </div>
        <div className="info-container">
          <div className="container">
            <StyleInput
                title="نام بیمار"
                direction={lang.dir}
            />
            <StyleInput
                title="شماره قبض مشتری"
                direction={lang.dir}
            />
            <StyleInput
                title="هزینه تراش به تومان"
                direction={lang.dir}
            />
          </div>
          <StyleInput
              title="توضیحات"
              direction={lang.dir}
          />
          <div className="dense-btn">
            <input className="switch-input" type="checkbox" id="switch" />
            <label className="switch-label" htmlFor="switch"></label>
            <p>فوری</p>
          </div>
          <button className="submit">ثبت<i class="fa-solid fa-plus"></i></button>
        </div>
      </div>
    </div>
  )
}

export default lathe
