import React from 'react'
import env, { normalPrice, normalPriceCount, purePrice, sumPrice, sumPriceNew , rxFindCount} from "../../../env";


const PreviewStockTable = (props) => {
    const content = props.content
    console.log(content)
    return (
        <div className="preview-stock-wrapper">
        {content&&content.map((Brand , i)=>(
            <div className="preview-stock-item">
                {Brand.data.map((Index,i)=>(<>
                    {Index.data.map((Material,m)=>(<>
                
                        <div className="title">
                            <strong className="index">
                                {Brand.brand?Brand.brand.toUpperCase():"-"} {Index.index}
                            </strong>
                            <strong className="material">
                                {Material.material}
                            </strong>
                        </div>
                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>SPH</th>
                                        <th>CYL</th>
                                        <th>تعداد</th>
                                        <th>قیمت</th>
                                        <th>جمع</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Material.data.map((item,i)=>(
                                        <tr>
                                            <td>{i+1}</td>
                                            <td>{item.sph}</td>
                                            <td>{item.cyl}</td>
                                            <td>{item.count}</td>
                                            <td>{normalPrice(item.rawPrice)}</td>
                                            <td>{normalPrice(item.sumPrice)}</td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>{Material.count + "Pcs"}</td>
                                        <td></td>
                                        <td>{normalPrice(Material.price)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </>
                ))}
            </>
        ))}

            </div>
        ))}
        </div>
    )
}

export default PreviewStockTable

