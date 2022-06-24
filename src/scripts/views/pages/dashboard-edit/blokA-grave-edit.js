import grave from '../../../data/grave-test'
import { createEditGravesDashboardTemplate } from '../../template dashboard/template-dashboard'

const editGraveA = () => {
  const renderGrave = grave
  $('#list_table').empty()
  $('#list_table').append(createEditGravesDashboardTemplate())

  renderGrave.blokA.forEach((tomb) => {
    if (!tomb.available) {
      tomb.available = 'No'
    } else {
      tomb.available = 'Yes'
    }
    $('#editGravesA').append(`
    <tr>
        <td id="graveId" data-id="${tomb.id}" >${tomb.id}</td>
        <td id="graveAvailable">${tomb.available}</td>
        <td>
        <button value="${tomb.id}" class="btnEdit">Edit</button>
        </td>
    </tr>
    `)
  })
  $(document).ready(function () {
    $('button').click(function () {
      const graveId = $(this)
      console.log(graveId.val())
    })
  })
}

export default editGraveA
