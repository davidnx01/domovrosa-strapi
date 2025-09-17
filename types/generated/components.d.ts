import type { Schema, Struct } from '@strapi/strapi';

export interface HeadingHeading extends Struct.ComponentSchema {
  collectionName: 'components_heading_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LinkChildrenLinkChildren extends Struct.ComponentSchema {
  collectionName: 'components_link_children_link_children';
  info: {
    displayName: 'Link Children';
  };
  attributes: {
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface NavigationLinkNavigationLink extends Struct.ComponentSchema {
  collectionName: 'components_navigation_link_navigation_links';
  info: {
    displayName: 'Navigation Link';
  };
  attributes: {
    childs: Schema.Attribute.Component<'link-children.link-children', true>;
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface ServiceCardServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_service_card_service_cards';
  info: {
    displayName: 'Service Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface SliderSlider extends Struct.ComponentSchema {
  collectionName: 'components_slider_sliders';
  info: {
    displayName: 'Slider';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'heading.heading': HeadingHeading;
      'link-children.link-children': LinkChildrenLinkChildren;
      'navigation-link.navigation-link': NavigationLinkNavigationLink;
      'service-card.service-card': ServiceCardServiceCard;
      'slider.slider': SliderSlider;
    }
  }
}
