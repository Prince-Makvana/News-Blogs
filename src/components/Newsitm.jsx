import React from 'react'

const Newsitm = ({ title, disc, imgUrl, newsUrl, author, date, source }) => {
    return (
        <div className='my-3'>
            <div className="card">

                <div>
                    <img src={imgUrl ? imgUrl : "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/46235KW2O73HSM7BWRITYPHWLI_size-normalized.jpg&w=1200"} className="card-img-top" alt="..." />
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-warning" style={{ zIndex: "99", left: "90%" }}>
                        {source}
                    </span>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{disc}...</p>
                    <p className="card-text"><small className="text-body-secondary"><b>By :</b> {author} <b>Date :</b> {new Date(date).toGMTString()} </small></p>
                    <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default Newsitm
