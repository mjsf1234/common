import {Entity, juggler} from '@loopback/repository';
import {Option} from '../constants';

export abstract class OptionLabelMixin {
  public static async register(modelClass: typeof juggler.PersistedModel) {
    let eligibleProperties: any = {};
    if (modelClass && modelClass.definition && modelClass.definition.properties) {
      for (let property in modelClass.definition.properties) {
        if (modelClass.definition.properties[property]['optionLabelIdentifier']) {
          eligibleProperties[property] = {
            label: property + 'Label',
            identifier: modelClass.definition.properties[property]['optionLabelIdentifier']
          };
        }
      }
    }

    let optionsMapForOptionLabelMixin: any = {};
    for (let identifier in Option.GLOBALOPTIONS) {
      if (!optionsMapForOptionLabelMixin[identifier]) {
        optionsMapForOptionLabelMixin[identifier] = {};
      }
      for (let option in Option.GLOBALOPTIONS[identifier]) {
        optionsMapForOptionLabelMixin[identifier][Option.GLOBALOPTIONS[identifier][option].value] =
          Option.GLOBALOPTIONS[identifier][option].label;
      }
    }

    modelClass.observe('loaded', async function event(ctx) {
      if (ctx.data) {
        for (let property in eligibleProperties) {
          ctx.data[eligibleProperties[property]['label']] = getLabel(eligibleProperties[property]['identifier'], ctx.data[property]);
        }
      }
    });

    function getLabel(identifier: string, value: number) {
      return optionsMapForOptionLabelMixin[identifier] && optionsMapForOptionLabelMixin[identifier][value]
        ? optionsMapForOptionLabelMixin[identifier][value]
        : null;
    }
  }
}
