import grave from '../../data/graveAPI'
import { createDashboardGravesTableTemplate } from '../../views/template dashboard/template-dashboard'

const Graves = () => {
  const renderGrave = grave
  $('#grave-dashboard').addClass('active')
  $('#list_table').empty()
  $('#list_table').append(createDashboardGravesTableTemplate())

  renderGrave.blokA.forEach(tomb => {
    if (!tomb.available) {
      $('#graveListTable').append(`
                <tr>
                    <td>${tomb.id}</td>
                </tr>
            `)
    }
  })

  renderGrave.blokB.forEach(tomb => {
    if (!tomb.available) {
      $('#graveListTable').append(`
                <tr>
                    <td>${tomb.id}</td>
                </tr>
            `)
    }
  })

  renderGrave.blokC.forEach(tomb => {
    if (!tomb.available) {
      $('#graveListTable').append(`
                <tr>
                    <td>${tomb.id}</td>
                </tr>
            `)
    }
  })

  renderGrave.blokD.forEach(tomb => {
    if (!tomb.available) {
      $('#graveListTable').append(`
                <tr>
                    <td>${tomb.id}</td>
                </tr>
            `)
    }
  })

  renderGrave.blokE.forEach(tomb => {
    if (!tomb.available) {
      $('#graveListTable').append(`
                <tr>
                    <td>${tomb.id}</td>
                </tr>
            `)
    }
  })
}

export default Graves
