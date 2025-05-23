/// <reference types="cypress" />

/*
 * Nadun De Silva - All Rights Reserved
 *
 * This source code and its associated files are the
 * confidential and proprietary information of Nadun De Silva.
 * Unauthorized reproduction, distribution, or disclosure
 * in any form, in whole or in part, is strictly prohibited
 * except as explicitly provided under a separate license
 * agreement with Nadun De Silva.
 *
 * Website: https://nadundesilva.com
 *
 * © 2023 Nadun De Silva. All rights reserved.
 */
import "@testing-library/cypress/types";

declare global {
    namespace Cypress {
        interface Chainable {
            loadPage(url: string): void;
            clickNavLink(name: string): Chainable<JQuery<Element>>;
            clickBreadcrumb(name: string): Chainable<JQuery<Element>>;
        }
    }
}
