import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: 'test.component.html',
  styleUrls: [
    'test.component.css'
  ]
})

export class TestComponent implements OnInit{

  ngOnInit(): void {
    var endTime = new Date("Jun 26 2017 18:00:00");
    this.initializeClock(endTime)
  }

  private initializeClock(endTime: Date) {
    var clock = document.getElementById("clockdiv");
    var daySpan = clock.querySelector(".days");
    var hourSpan = clock.querySelector(".hours");
    var minuteSpan = clock.querySelector(".minutes");
    var secondSpan = clock.querySelector(".seconds");

    function updateClock(){
      var timeRemaining = getTimeRemaining(endTime);

      daySpan.innerHTML = timeRemaining.days.toString();
      hourSpan.innerHTML = timeRemaining.hours.toString();
      minuteSpan.innerHTML = timeRemaining.minutes.toString();
      secondSpan.innerHTML = timeRemaining.seconds.toString();

    function getTimeRemaining(endTime: Date) {
        var t = endTime.valueOf() - (new Date()).valueOf();
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
      }

    }

    var timeInterval = setInterval(updateClock, 1000);
  }

}
