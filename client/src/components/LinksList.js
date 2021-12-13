import React from 'react'
import {Link} from 'react-router-dom'

export const LinksList = ({links}) => {
    if (!links.length) {
        return <p className="center"> Ссылок пока нет</p>
    }

    return (
        <table>
        <thead>
          <tr>
              <th>№</th>
              <th>Марка</th>
              <th>Тип кузова</th>
              <th>Номер</th>
              <th>Дата</th>
              <th>Время</th>
              <th>Открыть</th>
          </tr>
        </thead>

        <tbody>
            { links.map((link, index) => {
                return (
                    <tr key={link._id}>
                    <td>{index + 1}</td>
                    <td>{link.mark}</td>
                    <td>{link.caseType}</td>
                    <td>{link.number}</td>
                    <td>{new Date(link.date).toLocaleDateString()}</td>
                    <td>{new Date(link.date).toLocaleTimeString()}</td>
                    <td><Link to={`/detail/${link._id}`}>Открыть</Link></td>
                    </tr>
                )
            })}          
        </tbody>
      </table>
    )
}