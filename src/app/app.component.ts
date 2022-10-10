import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // all buttons with diffrent styles
  chips =
  [
    {

      name: 'Enabled',
      width: '65px',
      border: '8px ',
      padding: '6px 12px'
    },
    {

      name: 'Enabled',
      cancelIcon: "/assets/Images/cancelicon.png",
      width: '87px',
      border: '8px',
      padding: '6px 8px 6px 5px'
    },
    {

      icon: "/assets/Images/Car.png",
      name: 'Enabled',
      width: '85px',
      border: '8px',
      padding: '6px 12px 6px 8px'
    },
    {

      icon: "/assets/Images/Car.png",
      name: 'Enabled',
      cancelIcon: "/assets/Images/cancelicon.png",
      width: '105px',
      border: '8px',
      padding: '6px 8px'
    },
    {

      icon: '/assets/Images/User.png',
      name: 'Enabled',
      width: '85px',
      border: '20px',
      padding: '4px 12px 7px 4px'

    },
    {

      icon: '/assets/Images/User.png',
      name: 'Enabled',
      cancelIcon: "/assets/Images/cancelicon.png",
      width: '100px',
      border: '20px',
      padding: '4px 12px 7px 4px'
    },


    {

      name: 'Hovered',
      width: '65px',
      border: '8px ',
      padding: '6px 12px',
      backgroudColor: 'rgba(73, 69, 79, 0.08)'
    },
    {

      name: 'Hovered',
      cancelIcon: "/assets/Images/cancelicon.png",
      width: '87px',
      border: '8px',
      padding: '6px 8px 6px 5px',
      backgroudColor: 'rgba(73, 69, 79, 0.08)'
    },
    {

      icon: "/assets/Images/Car.png",
      name: 'Hovered',
      width: '85px',
      border: '8px',
      padding: '6px 12px 6px 8px',
      backgroudColor: 'rgba(73, 69, 79, 0.08)'
    },
    {

      icon: "/assets/Images/Car.png",
      name: 'Hovered',
      cancelIcon: "/assets/Images/cancelicon.png",
      width: '105px',
      border: '8px',
      padding: '6px 8px',
      backgroudColor: 'rgba(73, 69, 79, 0.08)'
    },
    {

      icon: '/assets/Images/User.png',
      name: 'Hovered',
      width: '85px',
      border: '20px',
      padding: '4px 12px 7px 4px',
      backgroudColor: 'rgba(73, 69, 79, 0.08)'

    },
    {

      icon: '/assets/Images/User.png',
      name: 'Hovered',
      cancelIcon: "/assets/Images/cancelicon.png",
      width: '100px',
      border: '20px',
      padding: '4px 12px 7px 4px',
      backgroudColor: 'rgba(73, 69, 79, 0.08)'
    },


    {

      name: 'Focused',
      width: '65px',
      border: '8px ',
      padding: '6px 12px',
      backgroudColor: 'rgba(73, 69, 79, 0.12)'
    },
    {

      name: 'Focused',
      cancelIcon: "/assets/Images/cancelicon.png",
      width: '87px',
      border: '8px',
      padding: '6px 8px 6px 5px',
      backgroudColor: 'rgba(73, 69, 79, 0.12)'
    },
    {

      icon: "/assets/Images/Car.png",
      name: 'Focused',
      width: '85px',
      border: '8px',
      padding: '6px 12px 6px 8px',
      backgroudColor: 'rgba(73, 69, 79, 0.12)'
    },
    {

      icon: "/assets/Images/Car.png",
      name: 'Focused',
      cancelIcon: "/assets/Images/cancelicon.png",
      width: '105px',
      border: '8px',
      padding: '6px 8px',
      backgroudColor: 'rgba(73, 69, 79, 0.12)'
    },
    {

      icon: '/assets/Images/User.png',
      name: 'Focused',
      width: '85px',
      border: '20px',
      padding: '4px 12px 7px 4px',
      backgroudColor: 'rgba(73, 69, 79, 0.12)'

    },
    {

      icon: '/assets/Images/User.png',
      name: 'Focused',
      cancelIcon: "/assets/Images/cancelicon.png",
      width: '100px',
      border: '20px',
      padding: '4px 12px 7px 4px',
      backgroudColor: 'rgba(73, 69, 79, 0.12)'
    },
    {

      name: 'Dragged',
      width: '65px',
      border: '8px ',
      padding: '6px 12px',
      backgroudColor: 'rgba(73, 69, 79, 0.12)'
    },
    {

      name: 'Dragged',
      cancelIcon: "/assets/Images/cancelicon.png",
      width: '87px',
      border: '8px',
      padding: '6px 8px 6px 5px',
      backgroudColor: 'rgba(73, 69, 79, 0.12)'
    },
    {

      icon: "/assets/Images/Car.png",
      name: 'Dragged',
      width: '85px',
      border: '8px',
      padding: '6px 12px 6px 8px',
      backgroudColor: 'rgba(73, 69, 79, 0.12)'
    },
    {

      icon: "/assets/Images/Car.png",
      name: 'Dragged',
      cancelIcon: "/assets/Images/cancelicon.png",
      width: '105px',
      border: '8px',
      padding: '6px 8px',
      backgroudColor: 'rgba(73, 69, 79, 0.12)'
    },
    {

      icon: '/assets/Images/User.png',
      name: 'Dragged',
      width: '85px',
      border: '20px',
      padding: '4px 12px 7px 4px',
      backgroudColor: 'rgba(73, 69, 79, 0.12)'

    },
    {

      icon: '/assets/Images/User.png',
      name: 'Dragged',
      cancelIcon: "/assets/Images/cancelicon.png",
      width: '100px',
      border: '20px',
      padding: '4px 12px 7px 4px',
      backgroudColor: 'rgba(73, 69, 79, 0.12)'
    },


    {

      name: 'Enabled',
      width: '65px',
      border: '8px ',
      padding: '6px 12px',
      backgroudColor: '#AEC6DD'
    },
    {

      name: 'Enabled',
      cancelIcon: "/assets/Images/cancelicon.png",
      width: '87px',
      border: '8px',
      padding: '6px 8px 6px 5px',
      backgroudColor: '#AEC6DD'
    },
    {

      icon: "/assets/Images/Car.png",
      name: 'Enabled',
      width: '85px',
      border: '8px',
      padding: '6px 12px 6px 8px',
      backgroudColor: '#AEC6DD'
    },
    {

      icon: "/assets/Images/Car.png",
      name: 'Enabled',
      cancelIcon: "/assets/Images/cancelicon.png",
      width: '105px',
      border: '8px',
      padding: '6px 8px',
      backgroudColor: '#AEC6DD'
    },
    {

      icon: '/assets/Images/check.png',
      name: 'Enabled',
      width: '85px',
      border: '20px',
      padding: '4px 12px 7px 4px',
      backgroudColor: '#AEC6DD'

    },
    {

      icon: '/assets/Images/check.png',
      name: 'Enabled',
      cancelIcon: "/assets/Images/cancelicon.png",
      width: '100px',
      border: '20px',
      padding: '4px 12px 7px 4px',
      backgroudColor: '#AEC6DD'
    },

    {

      name: 'Hovered',
      width: '65px',
      border: '8px ',
      padding: '6px 12px',
      backgroudColor: '#AEC6DD'
    },
    {

      name: 'Hovered',
      cancelIcon: "/assets/Images/cancelicon.png",
      width: '87px',
      border: '8px',
      padding: '6px 8px 6px 5px',
      backgroudColor: '#AEC6DD'
    },
    {

      icon: "/assets/Images/Car.png",
      name: 'Hovered',
      width: '85px',
      border: '8px',
      padding: '6px 12px 6px 8px',
      backgroudColor: '#AEC6DD'
    },
    {

      icon: "/assets/Images/Car.png",
      name: 'Hovered',
      cancelIcon: "/assets/Images/cancelicon.png",
      width: '105px',
      border: '8px',
      padding: '6px 8px',
      backgroudColor: '#AEC6DD'
    },
    {

      icon: '/assets/Images/check.png',
      name: 'Hovered',
      width: '85px',
      border: '20px',
      padding: '4px 12px 7px 4px',
      backgroudColor: '#AEC6DD'

    },
    {

      icon: '/assets/Images/check.png',
      name: 'Hovered',
      cancelIcon: "/assets/Images/cancelicon.png",
      width: '100px',
      border: '20px',
      padding: '4px 12px 7px 4px',
      backgroudColor: '#AEC6DD'
    },


    {

      name: 'Focused',
      width: '65px',
      border: '8px ',
      padding: '6px 12px',
      backgroudColor: '#AEC6DD'
    },
    {

      name: 'Focused',
      cancelIcon: "/assets/Images/cancelicon.png",
      width: '87px',
      border: '8px',
      padding: '6px 8px 6px 5px',
      backgroudColor: '#AEC6DD'
    },
    {

      icon: "/assets/Images/Car.png",
      name: 'Focused',
      width: '85px',
      border: '8px',
      padding: '6px 12px 6px 8px',
      backgroudColor: '#AEC6DD'
    },
    {

      icon: "/assets/Images/Car.png",
      name: 'Focused',
      cancelIcon: "/assets/Images/cancelicon.png",
      width: '105px',
      border: '8px',
      padding: '6px 8px',
      backgroudColor: '#AEC6DD'
    },
    {

      icon: '/assets/Images/check.png',
      name: 'Focused',
      width: '85px',
      border: '20px',
      padding: '4px 12px 7px 4px',
      backgroudColor: '#AEC6DD'

    },
    {

      icon: '/assets/Images/check.png',
      name: 'Focused',
      cancelIcon: "/assets/Images/cancelicon.png",
      width: '100px',
      border: '20px',
      padding: '4px 12px 7px 4px',
      backgroudColor: '#AEC6DD'
    },


    {

      name: 'Dragged',
      width: '65px',
      border: '8px ',
      padding: '6px 12px',
      backgroudColor: '#AEC6DD'
    },
    {

      name: 'Dragged',
      cancelIcon: "/assets/Images/cancelicon.png",
      width: '87px',
      border: '8px',
      padding: '6px 8px 6px 5px',
      backgroudColor: '#AEC6DD'
    },
    {

      icon: "/assets/Images/Car.png",
      name: 'Dragged',
      width: '85px',
      border: '8px',
      padding: '6px 12px 6px 8px',
      backgroudColor: '#AEC6DD'
    },
    {

      icon: "/assets/Images/Car.png",
      name: 'Dragged',
      cancelIcon: "/assets/Images/cancelicon.png",
      width: '105px',
      border: '8px',
      padding: '6px 8px',
      backgroudColor: '#AEC6DD'
    },
    {

      icon: '/assets/Images/check.png',
      name: 'Dragged',
      width: '85px',
      border: '20px',
      padding: '4px 12px 7px 4px',
      backgroudColor: '#AEC6DD'

    },
    {

      icon: '/assets/Images/check.png',
      name: 'Dragged',
      cancelIcon: "/assets/Images/cancelicon.png",
      width: '100px',
      border: '20px',
      padding: '4px 12px 7px 4px',
      backgroudColor: '#AEC6DD'
    },

  ]
  // add chip
  add({ target }: any) {
    const { value } = target;
    this.chips.push({
      name: value,
      width: '65px',
      border: '8px ',
      padding: '6px 12px'
    })
  }


  // remove a chip
  onItemDeleted(index: number){
    this.chips.splice(index, 1);
  }
}
