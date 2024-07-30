import PreviewTop from "./PreviewTop"

function PreviewRXTable(props){
    const order = props.lenzDetail
    const lens = props.lenzDetail
    const user = props.user
    if(!order) return
    const odMain = lens.odMain?
        lens.odMain.split(','):[,,,,,]
    const osMain = lens.osMain?
        lens.osMain.split(','):[,,,,,]
    const odMore = lens.odMore?
        lens.odMore.split(','):[,,,]
    const osMore = lens.osMore?
        lens.osMore.split(','):[,,,]
    console.log(odMain)
    // const frameSize = lens.frameSize?
    //     lens.frameSize.split(','):[,,,,,]
    // const services = lens.NazokTigh?JSON.parse(lens.NazokTigh):''
    return(
        <body className="factor-view">
            {/* <header>
                <div className="header-btn-wrapper">
                <div className="h-btn grey-btn">پیش‌نمایش سفارش</div>
                <div className="h-btn white-btn">پیوست</div>
                </div>
            </header> */}
            <div className="factor-main">
                <section className="lens-sec">
                <div className="order-info">
                    <ul className="r-list">
                    <li>شماره سفارش:</li>
                    <li>نام مشتری:</li>
                    <li>فروشگاه/قبض:</li>
                    <li>شماره سفارش قبل:</li>
                    <li>نام بیمار:</li>
                    <li>توضیحات:</li>
                    </ul>
                    <ul className="l-list">
                    <li>{order.rxOrderNo?order.rxOrderNo:"-"}</li>
                    <li>{user.cName?user.cName:'-'}</li>
                    <li>{order.ghabz?order.ghabz:'-'}</li>
                    <li>{order.oldOrderNo?order.oldOrderNo:'-'}</li>
                    <li>{order.consumer?order.consumer:'-'}</li>
                    <li>{order.moreInformation?order.moreInformation:' '}</li>
                    </ul>
                </div>
                <div className="lens-info">
                    <div className="lens-prob">
                    <div className="properties-box">
                        <div className="l-box">{order.coverCode&&order.coverCode}</div>
                        <div className="r-box">پوشش</div>
                    </div>
                    <div className="properties-box">
                        <div className="l-box">{order.coridor&&order.coridor}</div>
                        <div className="r-box">کریدور</div>
                    </div>
                    <div className="properties-box">
                        <div className="l-box">{order.frameType&&order.frameType}</div>
                        <div className="r-box">نوع فریم</div>
                    </div>
                    {order.expressPrice?
                    <div className="properties-box">
                        <div className="l-box">فوری</div>
                        <div className="r-box">ارسال</div>
                    </div>:<></>}
                    {order.checkPrice?
                    <div className="properties-box">
                        <div className="l-box">دارد</div>
                        <div className="r-box">بررسی مجدد</div>
                    </div>:<></>}
                    </div>
                </div>
                <div className="lens-img">
                    <div className="lens-title">
                        <p>{lens?(lens.brand+" "+lens.lenzDid):''}</p>
                        {/* <span>{lens?(lens.lenzIndex+" "+
                        lens.material+" "+lens.lenzDesign):''}</span> */}
                    </div>
                    {/* <img src={`/img/brands/${lens?lens.brandName:''}.svg`}
                     alt={lens&&lens.brandName}/> */}
                </div>
                </section>
                <div className="section-title">
                <p>اطلاعات نسخه</p>
                <div className="line"></div>
                </div>
                <section className="doc-sec">
                <div className="doc-table">
                    <div className="table-wrapper-1">
                    <table className="lens-table">
                        <tr>
                        <th>SPH</th>
                        <th>CYL</th>
                        <th>Axis</th>
                        <th>ADD</th>
                        <th>DIA</th>
                        <th>PD</th>
                        <th>FT/SEG</th>
                        <th>DECX</th>
                        <th>Prism</th>
                        <th>P/Base</th>
                        </tr>
                        <tr>
                        <td>{odMain[0]}</td>
                        <td>{odMain[1]}</td>
                        <td>{odMain[2]}</td>
                        <td>{odMain[3]}</td>
                        <td>{odMain[4]}</td>
                        <td></td>
                        <td></td>
                        <td>{odMore[2]}</td>
                        <td>{odMore[0]}</td>
                        <td>{odMore[1]}</td>
                        </tr>
                    </table>
                    <p>R</p>
                    </div>
                    <div className="table-wrapper-1">
                    <table className="lens-table">
                        <tr>
                        <th>SPH</th>
                        <th>CYL</th>
                        <th>Axis</th>
                        <th>ADD</th>
                        <th>DIA</th>
                        <th>PD</th>
                        <th>FT/SEG</th>
                        <th>DECX</th>
                        <th>Prism</th>
                        <th>P/Base</th>
                        </tr>
                        <tr>
                        <td>{osMain[0]}</td>
                        <td>{osMain[1]}</td>
                        <td>{osMain[2]}</td>
                        <td>{osMain[3]}</td>
                        <td>{osMain[4]}</td>
                        <td></td>
                        <td></td>
                        <td>{osMore[2]}</td>
                        <td>{osMore[0]}</td>
                        <td>{osMore[1]}</td>
                        </tr>
                    </table>
                    <p>L</p>
                    </div>

                </div>
                </section>
                <div className="section-title">
                <p>مشخصات فریم</p>
                <div className="line"></div>
                </div>
                <section className="frame-sec">
                <table className="lens-table">
                    <tr>
                    <th>HBox</th>
                    <th>VBox</th>
                    <th>DBL</th>
                    <th>FH</th>
                    <th>IPD</th>
                    <th>BVD</th>
                    <th>Panto</th>
                    <th>FFA</th>
                    <th>ED</th>
                    <th>Base</th>
                    </tr>
                    <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                </table>
                </section>
                <div className="section-title">
                <p>خدمات</p>
                <div className="line" style={{marginRight:"45px"}}></div>
                </div>
                <section className="service-sec">
                <div className="service-box">
                    
                    <div className="properties-box">
                    <div className="r-box">خدمات رنگ</div>
                    <div className="l-box"></div>
                    </div>
                    {/* {services&&services.map((service,i)=>(
                        <div className="properties-box" key={i}>
                            <div className="r-box">{service.title}</div>
                            <div className="l-box">دارد</div>
                        </div>
                    ))}
                    {props.cylinder&&props.cylinder.map((service,i)=>(
                        <div className="properties-box" key={i}>
                            <div className="r-box">
                                {service.title.replace('خدمات ','')}</div>
                            <div className="l-box">دارد</div>
                        </div>
                    ))} */}
                    
                </div>
                </section>
                
            </div>
            
            </body>
    )
}
export default PreviewRXTable