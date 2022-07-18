import grave from '../../data/graveAPI'
<<<<<<< HEAD
import { createDashboardGravesTableTemplate } from '../../views/template dashboard/template-dashboard'

const Graves = async () => {
  const renderGrave = await grave.getAllBlok()
=======
import { createDashboardGravesTableTemplate, createSearchFilterDataTemplate } from '../../views/template dashboard/template-dashboard'

const Graves = async () => {
  const renderGrave = await grave.getAllBlok()
  if (!$('#data-container').length) {
    createSearchFilterDataTemplate()
  }

>>>>>>> 28dd06facdba56d5077cabb666429104ecfbadbf
  $('#grave-dashboard').addClass('active')
  $('#list_table').empty()
  $('#list_table').append(createDashboardGravesTableTemplate())

<<<<<<< HEAD
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
=======
  Object.keys(renderGrave).forEach((blok) => {
    let commaFlag = true
    renderGrave[blok].forEach((slot) => {
      if (!slot.available) {
        let comma = ','

        if (commaFlag) {
          comma = ''
          commaFlag = false
        }

        $(`#${blok}-data`).append(`<span>${comma} ${slot.id}</span>`)
      }
    })
>>>>>>> 28dd06facdba56d5077cabb666429104ecfbadbf
  })

  $('#search-input').on('keyup', searchslots)
}

const searchslots = () => {
  const value = $('#search-input').val().toLowerCase()
  $('#list_table td span').filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    return undefined
  }
  )
}

export default Graves
