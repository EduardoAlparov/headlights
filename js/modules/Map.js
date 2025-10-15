export default class Map {
  constructor(mapId, options) {
    this.mapId = mapId;
    this.options = options;
    this.init();
    // this.showInfo();
  }

  async init() {
    await this.injectYMapsScript();
    await this.loadYMaps();
    this.initMap();
  }

  injectYMapsScript() {
    return new Promise((resolve) => {
      const ymapsScript = document.createElement('script');
      ymapsScript.src =
        "https://api-maps.yandex.ru/2.1.68/?apikey=d02525f1-2a0d-4700-a5e1-e4487f06702c&?apikey=d02525f1-2a0d-4700-a5e1-e4487f06702c&load=package.full&lang=ru-RU";
      document.body.appendChild(ymapsScript);
      ymapsScript.addEventListener('load', resolve);
    });
  }

  loadYMaps() {
    return new Promise((resolve) => ymaps.ready(resolve));
  }

  initMap() {
    let geoObjects = [],
      points = this.options.coords,

      getPointData = function (index) {
        return {
          balloonContentHeader: '<font size=3><b><a target="_blank" href="https://yandex.ru">Здесь может быть ваша ссылка</a></b></font>',
          balloonContentBody: '<p>Ваше имя: <input name="login"></p><p>Телефон в формате 2xxx-xxx:  <input></p><p><input type="submit" value="Отправить"></p>',
          balloonContentFooter: '<font size=1>Информация предоставлена: </font> балуном <strong>метки ' + index + '</strong>',
          clusterCaption: 'метка <strong>' + index + '</strong>'
        }
      },

      getPointOptions = function () {
        return {
          preset: 'islands#orangeIcon'
        };
      };
    
    this.clusterer = new ymaps.Clusterer({
      groupByCoordinates: true,
      clusterDisableClickZoom: true,
      clusterOpenBalloonOnClick: false,
    });

    this.clusterer.events.add('click', (e) => {
      const coords = e.get('target').geometry.getCoordinates();
      console.log(coords);
    });

    this.map = new ymaps.Map(this.mapId, {
      center: this.options.center,
      zoom: this.options.zoom,
      controls: this.options.controls,
    });

    this.map.behaviors.disable('scrollZoom');
    // this.map.behaviors.disable('drag'); 

    for (var i = 0, len = points.length; i < len; i++) {
      geoObjects[i] = new ymaps.Placemark(points[i], getPointData(i), getPointOptions());
    }

    this.clusterer.add(geoObjects);
    this.map.geoObjects.add(this.clusterer);

  }

  showInfo() {
    console.log(this.options);
  }
}