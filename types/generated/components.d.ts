import type { Schema, Struct } from '@strapi/strapi';

export interface BenefitsBenefits extends Struct.ComponentSchema {
  collectionName: 'components_benefits_benefits';
  info: {
    displayName: 'Benefits';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface FooterMenuFooterLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_menu_footer_links';
  info: {
    displayName: 'Footer Links';
  };
  attributes: {
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface FooterMenuFooterMenu extends Struct.ComponentSchema {
  collectionName: 'components_footer_menu_footer_menus';
  info: {
    displayName: 'Footer Menu';
  };
  attributes: {
    items: Schema.Attribute.Component<'footer-menu.footer-links', true>;
    name: Schema.Attribute.String;
  };
}

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

export interface PageHeading extends Struct.ComponentSchema {
  collectionName: 'components_page_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface PageSeo extends Struct.ComponentSchema {
  collectionName: 'components_page_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface PageTabs extends Struct.ComponentSchema {
  collectionName: 'components_page_tabs';
  info: {
    displayName: 'Tabs';
  };
  attributes: {
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    name: Schema.Attribute.String;
  };
}

export interface PartnersPartners extends Struct.ComponentSchema {
  collectionName: 'components_partners_partners';
  info: {
    displayName: 'Partners';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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
      'benefits.benefits': BenefitsBenefits;
      'footer-menu.footer-links': FooterMenuFooterLinks;
      'footer-menu.footer-menu': FooterMenuFooterMenu;
      'heading.heading': HeadingHeading;
      'link-children.link-children': LinkChildrenLinkChildren;
      'navigation-link.navigation-link': NavigationLinkNavigationLink;
      'page.heading': PageHeading;
      'page.seo': PageSeo;
      'page.tabs': PageTabs;
      'partners.partners': PartnersPartners;
      'service-card.service-card': ServiceCardServiceCard;
      'slider.slider': SliderSlider;
    }
  }
}
