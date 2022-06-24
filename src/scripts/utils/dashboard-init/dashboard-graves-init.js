import grave from '../../data/grave-test'
import { createDashboardGravesTableTemplate } from '../../views/template dashboard/template-dashboard'

const Graves = () => {
  const renderGrave = grave
  $('#grave-dashboard').addClass('active')
  $('#list_table').empty()
  $('#list_table').append(createDashboardGravesTableTemplate())

  renderGrave.blokA.forEach(tomb => {
    if (!tomb.available) {
      $('#graveA').append(`
                    <td>${tomb.id}</td>
            `)
    }
  })

  renderGrave.blokB.forEach(tomb => {
    if (!tomb.available) {
      $('#graveB').append(`  
                    <td>${tomb.id}</td>
            `)
    }
  })

  renderGrave.blokC.forEach(tomb => {
    if (!tomb.available) {
      $('#graveC').append(`
                    <td>${tomb.id}</td>
            `)
    }
  })

  renderGrave.blokD.forEach(tomb => {
    if (!tomb.available) {
      $('#graveD').append(`
                    <td>${tomb.id}</td>
            `)
    }
  })

  renderGrave.blokE.forEach(tomb => {
    if (!tomb.available) {
      $('#graveE').append(`
                    <td>${tomb.id}</td>
            `)
    }
  })
}

export default Graves
